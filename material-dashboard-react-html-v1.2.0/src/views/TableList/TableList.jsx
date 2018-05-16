import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TableList({ ...props }) {

// var watchList = WatchListApi.getWatchList()

  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Search Results"
          cardSubtitle="Here are your movie search results"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["movie", "Country", "City", "Salary"]}
            />
          }
        />
      </ItemGrid>
      
    </Grid>
  );
}

export default TableList;
