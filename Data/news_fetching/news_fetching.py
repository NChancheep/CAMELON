from bs4 import BeautifulSoup
import requests 
import time 
from datetime import datetime
import json 
import pandas as pd
import utils



def get_thairath_data():
    url = 'https://www.thairath.co.th/news/crime'
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, 'lxml')
    data = json.loads(soup.find("script", { "id" : "__NEXT_DATA__"}).text)
    return data


def find_news(url):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, 'lxml')
    script_data = json.loads(soup.find("script", { "id" : "__NEXT_DATA__"}).text)
    data = script_data['props']['initialProps']['pageProps']['items']
    news_id = "THR" + str(data['id'])
    publish_date = data['publishTimeTh']
    news_source = 'ไทยรัฐ'
    news_title = data['title']
    news_intro = data['abstract']
    news_description = utils.clean(data['content'])
    news_image = data['image']
    return news_id , publish_date , news_source, news_title, news_intro, news_description, news_image 

def get_min_ts():
    data = get_thairath_data()
    min_ts = data['props']['initialState']['common']['data']['minTs']
    return min_ts
    
def get_thairath_news():
    
    data = get_thairath_data()
    data_links = data['props']['initialState']['common']['data']['linkedData']['dataLinks']
    for data in data_links:
        if "crime" in data['canonical']:
            news_id , publish_date , news_source, news_title, news_intro, news_description, news_image = find_news(data['canonical'])
            print(f'Writing News {news_id} : {news_title}')
            news_dict = {
                "id" : news_id,
                "publish_date": publish_date,
                "source": news_source,
                "news_title" : news_title,
                "news_intro" : news_intro, 
                "news_description": news_description,
                "news_image" : news_image
            }
            with open(f'data/{news_id}.jsonl', 'w', encoding='utf-8') as jsonl_file:
                json.dump(news_dict, jsonl_file, ensure_ascii=False)
    


if __name__ == '__main__':
    old_min_ts = None 
    while True:
        min_ts = get_min_ts()
        if min_ts != old_min_ts:
            get_thairath_news()
            old_min_ts = min_ts
            time_wait = 10
            print(f'Waiting {time_wait} minutes...')
            time.sleep(time_wait * 60)
        else:
            time_wait = 10
            print(f'Waiting min_ts to change')
            time.sleep(time_wait * 60)      


