import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TableList({ ...props }) {
  var movieData = props.location.state.referrer
  var movieArray = []
  console.log(movieData)

  if (movieData) {
  for (var i = 0; i < movieData.length; i++) {
      var array = [movieData[i].title, movieData[i].popularity, movieData[i].overview, movieData[i].release_date]
      movieArray.push(array)
    }
    console.log("movieArray: "+movieArray)
    
  }

  



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
      tableData={movieArray}
      />
    }
    />
    </ItemGrid>

    </Grid>
    );
}

export default TableList;
