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

app.get("/thai_geographies", (req, res) => {
    db.query("SELECT * FROM thai_geographies", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/thai_geographies/:id/thai_provinces", (req, res) => {
    id = req.params.id;
    console.log(id)
    db.query(
      "SELECT * FROM thai_provinces WHERE geography_id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/thai_provinces/:province_id/thai_amphures", (req, res) => {
    province_id = req.params.province_id;
    db.query(
      "SELECT * FROM thai_amphures WHERE province_id = ?",
      [province_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


  app.get("/thai_amphures/:amphure_id/thai_tambons", (req, res) => {
    amphure_id = req.params.amphure_id;
    db.query(
      "SELECT * FROM thai_tambons WHERE amphure_id = ?",
      [amphure_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  
  
  
app.get("/thai_provinces", (req, res) => {
  db.query("SELECT * FROM thai_provinces", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/provinces/:province_id/districts", (req, res) => {
  province_id = req.params.province_id;
  // console.log(province_id)
  db.query(
    "SELECT * FROM districts WHERE province_id = ?",
    [province_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



app.get(
  "/districts/:district_id/subdistricts",
  (req, res) => {
    district_id = req.params.district_id;
    db.query(
      "SELECT * FROM subdistricts WHERE district_id = ?",
      [district_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log(result)
        }
      }
    );
  }
);

app.get("/districts", (req, res) => {
  db.query("SELECT name_in_thai FROM districts", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/subdistricts", (req, res) => {
  db.query("SELECT name_in_thai FROM subdistricts ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
