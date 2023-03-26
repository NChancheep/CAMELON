const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "camelon",
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});

app.get("/years", (req, res) => {
  db.query(
    `SELECT YEAR(date) as Year from Thairath_Metadata GROUP BY Year ORDER BY Year
      `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/thairathNewsRecords", (req, res) => {
  console.log(req.query.yearStart, req.query.yearEnd, req.query.crimeType);
  if (req.query.crimeType === "") {
    db.query(
      `SELECT YEAR(date) as year, COUNT(*) as 'Numbers'
      FROM Thairath_Metadata WHERE YEAR(date) between ? and ? 
      GROUP BY year
      ORDER BY year;
        `,
      [req.query.yearStart, req.query.yearEnd],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT YEAR(date) as year, COUNT(*) as 'Numbers'
   FROM Thairath_Metadata 
   WHERE YEAR(date) BETWEEN ? AND ? AND \`${req.query.crimeType}\` = 1
   GROUP BY year
   ORDER BY year`,
      [req.query.yearStart, req.query.yearEnd],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Thairath");
          console.log(result);
        }
      }
    );
  }
});

app.get("/dailyNewsRecords", (req, res) => {
  if (req.query.crimeType === "") {
    db.query(
      `SELECT YEAR(date) as year, COUNT(*) as 'Numbers'
      FROM Dailynews_Metadata WHERE YEAR(date) between ? and ? 
      GROUP BY year
      ORDER BY year;
        `,
      [req.query.yearStart, req.query.yearEnd],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT YEAR(date) as year, COUNT(*) as 'Numbers'
   FROM Dailynews_Metadata
   WHERE YEAR(date) BETWEEN ? AND ? AND \`${req.query.crimeType}\` = 1
   GROUP BY year
   ORDER BY year`,
      [req.query.yearStart, req.query.yearEnd],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Dailynews");
          console.log(result);
        }
      }
    );
  }
});

app.get("/thairathcrimetypes", (req, res) => {
  console.log(req.query.year);
  if (req.query.year === "") {
    db.query(
      `SELECT 
      SUM(Gambling) AS Gambling, 
      SUM(Murder) AS Murder,
      SUM(\`Sexual Abuse\`) AS \`Sexual Abuse\`,
      SUM(\`Theft/Burglary\`) AS \`Theft/Burglary\`,
      SUM(Drug) AS Drug,
      SUM(\`Battery/Assault\`) AS \`Battery/Assault\`,
      SUM(Accident) AS Accident
  FROM 
      Thairath_Metadata
  `,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Thairath");
          console.log(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT 
      SUM(Gambling) AS Gambling, 
      SUM(Murder) AS Murder,
      SUM(\`Sexual Abuse\`) AS \`Sexual Abuse\`,
      SUM(\`Theft/Burglary\`) AS \`Theft/Burglary\`,
      SUM(Drug) AS Drug,
      SUM(\`Battery/Assault\`) AS \`Battery/Assault\`,
      SUM(Accident) AS Accident
  FROM 
      Thairath_Metadata
  WHERE 
    YEAR(date) = ?
  `,
      [req.query.year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Thairath");
          console.log(result);
        }
      }
    );
  }
});

app.get("/dailynewscrimetypes", (req, res) => {
  console.log(req.query.year);
  if (req.query.year === "") {
    db.query(
      `SELECT 
      SUM(Gambling) AS Gambling, 
      SUM(Murder) AS Murder,
      SUM(\`Sexual Abuse\`) AS \`Sexual Abuse\`,
      SUM(\`Theft/Burglary\`) AS \`Theft/Burglary\`,
      SUM(Drug) AS Drug,
      SUM(\`Battery/Assault\`) AS \`Battery/Assault\`,
      SUM(Accident) AS Accident
  FROM 
    Dailynews_Metadata
  `,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Thairath");
          console.log(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT 
      SUM(Gambling) AS Gambling, 
      SUM(Murder) AS Murder,
      SUM(\`Sexual Abuse\`) AS \`Sexual Abuse\`,
      SUM(\`Theft/Burglary\`) AS \`Theft/Burglary\`,
      SUM(Drug) AS Drug,
      SUM(\`Battery/Assault\`) AS \`Battery/Assault\`,
      SUM(Accident) AS Accident
  FROM 
    Dailynews_Metadata
  WHERE 
    YEAR(date) = ?
  `,
      [req.query.year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Thairath");
          console.log(result);
        }
      }
    );
  }
});


app.get("/thairathCrimesCount", (req, res) => {
  console.log(req.query.year);
  if (req.query.year === "") {
    db.query(
      `SELECT MONTH(date) as month, COUNT(*) as 'Numbers'
      FROM Thairath_Metadata
      GROUP BY MONTH(date)
      ORDER BY MONTH(date);
  `, 
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Thairath");
          console.log(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT MONTH(date) as month, COUNT(*) as 'Numbers'
      FROM Thairath_Metadata WHERE YEAR(date) = ?
      GROUP BY MONTH(date)
      ORDER BY MONTH(date);
  `,
      [req.query.year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("Thairath");
          console.log(result);
        }
      }
    );
  }
});


app.get("/dailynewsCrimesCount", (req, res) => {
  console.log(req.query.year);
  if (req.query.year === "") {
    db.query(
      `SELECT MONTH(date) as month, COUNT(*) as 'Numbers'
      FROM Dailynews_Metadata
      GROUP BY MONTH(date)
      ORDER BY MONTH(date);
  `, 
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("DailyNews");
          console.log(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT MONTH(date) as month, COUNT(*) as 'Numbers'
      FROM Dailynews_Metadata WHERE YEAR(date) = ?
      GROUP BY MONTH(date)
      ORDER BY MONTH(date);
  `,
      [req.query.year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send(result);
          console.log("DailyNews");
          console.log(result);
        }
      }
    );
  }
});

app.listen(3001, "0.0.0.0", function () {
  console.log("Listening to port:  " + 3001);
});
