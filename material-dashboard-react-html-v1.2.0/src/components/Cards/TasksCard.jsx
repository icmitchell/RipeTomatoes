import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
  // Tabs,
  // Tab
} from "material-ui";
// import { BugReport, Code, Cloud } from "@material-ui/icons";

import watchListApi from "../../utils/watchListApi"

import { Tasks } from "components";

import tasksCardStyle from "assets/jss/material-dashboard-react/tasksCardStyle";

class TasksCard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    var watchList = watchListApi.getWatchList()

    watchList = [{'title': 'Top Gun'}, {'title': 'Jurrasic Park'}, {"title": "Waterworld"}]

    var indexArray = []
    var movieArray = watchList.map((currentValue, index) => {
      indexArray.push(index)
      return (currentValue.title)
    })





    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          title="Watchlist:"
       
        />
        <CardContent>
          {this.state.value === 0 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={indexArray}
                tasks={movieArray}
              />
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
}

TasksCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tasksCardStyle)(TasksCard);
