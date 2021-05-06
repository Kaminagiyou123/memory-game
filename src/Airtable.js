export const findData = async (item) => {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
    process.env.REACT_APP_BASE_ID
  );

  base("memogame")
    .select({
      filterByFormula: `username = "${item.email}"`,
    })
    .firstPage(function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      return record;
    });
};

export const updateData = async (item, numberOfBoxes, bestRecord) => {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
    process.env.REACT_APP_BASE_ID
  );

  base("memogame")
    .select({
      filterByFormula: `username = "${item.email}"`,
    })
    .firstPage(function (err, results) {
      if (err) {
        console.error(err);
        throw err;
      }

      if (results.length > 0) {
        const id = results[0].id;
        let level;
        switch (parseInt(numberOfBoxes)) {
          case 12:
            level = "level0score";
            break;
          case 16:
            level = "level1score";
            break;
          case 20:
            level = "level2score";
            break;
          case 24:
            level = "level3score";
            break;
          case 30:
            level = "level4score";
            break;
          case 36:
            level = "level5score";
            break;
          default:
            break;
        }
        const currentScore = results[0].fields[level];
        console.log(currentScore);
        console.log(level);

        (bestRecord < currentScore || !currentScore) &&
          base("memogame").update(
            [
              {
                id: id,
                fields: {
                  [level]: bestRecord,
                },
              },
            ],
            function (err, records) {
              if (err) {
                console.error(err);
                return;
              }
              records.forEach(function (record) {
                console.log(record);
              });
            }
          );
      }
    });
};
export const createData = (item) => {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
    process.env.REACT_APP_BASE_ID
  );

  base("memogame").create(
    [
      {
        fields: {
          ...item,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
};
