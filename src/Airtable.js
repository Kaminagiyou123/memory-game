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

export const updateData = async (item, newRecord) => {
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
        var id = results[0].id;

        base("memogame").update(
          [
            {
              id: id,
              fields: {
                ...newRecord,
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
