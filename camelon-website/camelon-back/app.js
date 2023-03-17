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

app.get("/thairath_metadata", (req, res) => {
  db.query("SELECT * FROM thairath_metadata", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/crimetypes_count", (req, res) => {
  console.log(req.query.year);
  if (req.query.year == "all_year") {
    db.query(
      `SELECT crime_type, COUNT(*) as crime_rate
      FROM Thairath_Metadata WHERE  YEAR(date) BETWEEN '1970' AND '3000'
      GROUP BY crime_type
      ORDER BY crime_rate
      `,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT crime_type, COUNT(*) as crime_rate
    FROM Thairath_Metadata WHERE YEAR(date) = ?
    GROUP BY crime_type
    ORDER BY crime_rate`,
      [req.query.year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    );
  }
});

app.get("/crimecount", (req, res) => {
  console.log(req.query.year);

  if (req.query.year == "all_year") {
    db.query(
      `SELECT MONTH(date) AS Month, COUNT(*) as crime_rate
        FROM Thairath_Metadata 
        WHERE YEAR(date) BETWEEN '1970' AND '3000'
        GROUP BY Month
        ORDER BY Month;
        `,
      [req.query.year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    );
  } else {
    db.query(
      `SELECT MONTH(date) AS Month, COUNT(*) as crime_rate
        FROM Thairath_Metadata 
        WHERE YEAR(date) = ?
        GROUP BY Month
        ORDER BY Month;
        `,
      [req.query.year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          // console.log(result);
          res.send(result);
        }
      }
    );
  }
});

app.listen(3001, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 3001);
});