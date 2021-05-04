export const findData = async (item) => {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
    process.env.REACT_APP_BASE_ID
  );

  base("memogame")
    .select({
      filterByFormula: `username = "${item.name}"`,
    })
    .firstPage(function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Retrieved", record.id);
    });
};

export const updateData = async (id, item) => {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
    process.env.REACT_APP_BASE_ID
  );

  base("memogame").update(
    [
      {
        id: id,
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
        console.log(record.get("Goal_to_Close"));
      });
    }
  );
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
