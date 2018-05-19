import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TableList({...props}) {
  if (props.location.state.referrer) {
    var movieData = props.location.state.referrer
    var movieArray = []
    console.log(movieData)
    for (var i = 0; i < movieData.length; i++) {
      var array = [movieData[i].title, movieData[i].popularity, movieData[i].overview, movieData[i].release_date]
      movieArray.push(array)
    }
    console.log("movieArray: " + movieArray)

  }



  return (
    <Grid container>
      <ItemGrid
                xs={ 12 }
                sm={ 12 }
                md={ 12 }>
        <RegularCard
                     cardTitle="Search Results"
                     cardSubtitle="Here are your movie search results"
                     content={ <Table
                                      tableHeaderColor="primary"
                                      tableHead={ ["Title", "Popularity", "Overview", "Release Date"] }
                                      tableData={ movieArray } /> } />
      </ItemGrid>
    </Grid>
    );
}

export default TableList;
