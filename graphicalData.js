var videoData = 

// Last updated date
newResortStatsLastUpdated = '03/09/21';

// Percentage Complete by Region
var midwestData = allData.filter(val=>val.region==='Midwest' && val.officialSkiResort);
var westCoastData = allData.filter(val=>val.region==='West Coast' && val.officialSkiResort);
var rockyMountainData = allData.filter(val=>val.region==='Rocky Mountains' && val.officialSkiResort);
var newEnglandData = allData.filter(val=>val.region==='New England' && val.officialSkiResort);
var midAtlanticData = allData.filter(val=>val.region==='Mid-Atlantic' && val.officialSkiResort);
var southeastData = allData.filter(val=>val.region==='Southeast' && val.officialSkiResort);
var coloradoData = allData.filter(val=>val.state==='Colorado' && val.officialSkiResort);



var regionData = {
  midwest: 100*(midwestData.filter(val=>val.videos.length>0).length / midwestData.length),
  westCoast: 100*(westCoastData.filter(val=>val.videos.length>0).length / westCoastData.length),
  rockyMountain: 100*(rockyMountainData.filter(val=>val.videos.length>0).length / rockyMountainData.length),
  newEngland: 100*(newEnglandData.filter(val=>val.videos.length>0).length / newEnglandData.length),
  midAtlantic: 100*(midAtlanticData.filter(val=>val.videos.length>0).length / midAtlanticData.length),
  southeast: 100*(southeastData.filter(val=>val.videos.length>0).length / southeastData.length),
  asia: 100*(asiaData.filter(val=>val.videos.length>0).length / asia.length)
  
};

// Percentage Complete by State
var alabamaData = allData.filter(val=>val.state==='Alabama' && val.officialSkiResort);
var alaskaData = allData.filter(val=>val.state==='Alaska' && val.officialSkiResort);
var arizonaData = allData.filter(val=>val.state==='Arizona' && val.officialSkiResort);
var californiaData = allData.filter(val=>val.state==='California' && val.officialSkiResort);
var coloradoData = allData.filter(val=>val.state==='Colorado' && val.officialSkiResort);
var connecticutData = allData.filter(val=>val.state==='Connecticut' && val.officialSkiResort);
var idahoData = allData.filter(val=>val.state==='Idaho' && val.officialSkiResort);
var illinoisData = allData.filter(val=>val.state==='Illinois' && val.officialSkiResort);
var indianaData = allData.filter(val=>val.state==='Indiana' && val.officialSkiResort);
var iowaData = allData.filter(val=>val.state==='Iowa' && val.officialSkiResort);
var maineData = allData.filter(val=>val.state==='Maine' && val.officialSkiResort);
var marylandData = allData.filter(val=>val.state==='Maryland' && val.officialSkiResort);
var massachusettsData = allData.filter(val=>val.state==='Massachusetts' && val.officialSkiResort);
var michiganData = allData.filter(val=>val.state==='Michigan' && val.officialSkiResort);
var minnesotaData = allData.filter(val=>val.state==='Minnesota' && val.officialSkiResort);
var missouriData = allData.filter(val=>val.state==='Missouri' && val.officialSkiResort);
var montanaData = allData.filter(val=>val.state==='Montana' && val.officialSkiResort);
var nevadaData = allData.filter(val=>val.state==='Nevada' && val.officialSkiResort);
var newHampshireData = allData.filter(val=>val.state==='New Hampshire' && val.officialSkiResort);
var newJerseyData = allData.filter(val=>val.state==='New Jersey' && val.officialSkiResort);
var newMexicoData = allData.filter(val=>val.state==='New Mexico' && val.officialSkiResort);
var newYorkData = allData.filter(val=>val.state==='New York' && val.officialSkiResort);
var northCarolinaData = allData.filter(val=>val.state==='North Carolina' && val.officialSkiResort);
var northDakotaData = allData.filter(val=>val.state==='North Dakota' && val.officialSkiResort);
var ohioData = allData.filter(val=>val.state==='Ohio' && val.officialSkiResort);
var oregonData = allData.filter(val=>val.state==='Oregon' && val.officialSkiResort);
var pennsylvaniaData = allData.filter(val=>val.state==='Pennsylvania' && val.officialSkiResort);
var rhodeIslandData = allData.filter(val=>val.state==='Rhode Island' && val.officialSkiResort);
var southDakotaData = allData.filter(val=>val.state==='South Dakota' && val.officialSkiResort);
var tennesseeData = allData.filter(val=>val.state==='Tennessee' && val.officialSkiResort);
var texasData = allData.filter(val=>val.state==='Texas' && val.officialSkiResort);
var utahData = allData.filter(val=>val.state==='Utah' && val.officialSkiResort);
var vermontData = allData.filter(val=>val.state==='Vermont' && val.officialSkiResort);
var virginiaData = allData.filter(val=>val.state==='Virginia' && val.officialSkiResort);
var washingtonData = allData.filter(val=>val.state==='Washington' && val.officialSkiResort);
var westVirginiaData = allData.filter(val=>val.state==='West Virginia' && val.officialSkiResort);
var wisconsinData = allData.filter(val=>val.state==='Wisconsin' && val.officialSkiResort);
var wyomingData = allData.filter(val=>val.state==='Wyoming' && val.officialSkiResort);

var stateData = {
  alabama: 100*(alabamaData.filter(val=>val.videos.length>0).length / alabamaData.length),
  alaska: 100*(alaskaData.filter(val=>val.videos.length>0).length / alaskaData.length),
  arizona: 100*(arizonaData.filter(val=>val.videos.length>0).length / arizonaData.length),
  california: 100*(californiaData.filter(val=>val.videos.length>0).length / californiaData.length),
  colorado: 100*(coloradoData.filter(val=>val.videos.length>0).length / coloradoData.length),
  connecticut: 100*(connecticutData.filter(val=>val.videos.length>0).length / connecticutData.length),
  idaho: 100*(idahoData.filter(val=>val.videos.length>0).length / idahoData.length),
  illinois: 100*(illinoisData.filter(val=>val.videos.length>0).length / illinoisData.length),
  indiana: 100*(indianaData.filter(val=>val.videos.length>0).length / indianaData.length),
  iowa: 100*(iowaData.filter(val=>val.videos.length>0).length / iowaData.length),
  maine: 100*(maineData.filter(val=>val.videos.length>0).length / maineData.length),
  maryland: 100*(marylandData.filter(val=>val.videos.length>0).length / marylandData.length),
  massachusetts: 100*(massachusettsData.filter(val=>val.videos.length>0).length / massachusettsData.length),
  michigan: 100*(michiganData.filter(val=>val.videos.length>0).length / michiganData.length),
  minnesota: 100*(minnesotaData.filter(val=>val.videos.length>0).length / minnesotaData.length),
  missouri: 100*(missouriData.filter(val=>val.videos.length>0).length / missouriData.length),
  montana: 100*(montanaData.filter(val=>val.videos.length>0).length / montanaData.length),
  nevada: 100*(nevadaData.filter(val=>val.videos.length>0).length / nevadaData.length),
  newHampshire: 100*(newHampshireData.filter(val=>val.videos.length>0).length / newHampshireData.length),
  newJersey: 100*(newJerseyData.filter(val=>val.videos.length>0).length / newJerseyData.length),
  newMexico: 100*(newMexicoData.filter(val=>val.videos.length>0).length / newMexicoData.length),
  newYork: 100*(newYorkData.filter(val=>val.videos.length>0).length / newYorkData.length),
  northCarolina: 100*(northCarolinaData.filter(val=>val.videos.length>0).length / northCarolinaData.length),
  northDakota: 100*(northDakotaData.filter(val=>val.videos.length>0).length / northDakotaData.length),
  ohio: 100*(ohioData.filter(val=>val.videos.length>0).length / ohioData.length),
  oregon: 100*(oregonData.filter(val=>val.videos.length>0).length / oregonData.length),
  pennsylvania: 100*(pennsylvaniaData.filter(val=>val.videos.length>0).length / pennsylvaniaData.length),
  rhodeIsland: 100*(rhodeIslandData.filter(val=>val.videos.length>0).length / rhodeIslandData.length),
  southDakota: 100*(southDakotaData.filter(val=>val.videos.length>0).length / southDakotaData.length),
  tennessee: 100*(tennesseeData.filter(val=>val.videos.length>0).length / tennesseeData.length),
  texas: 100*(texasData.filter(val=>val.videos.length>0).length / texasData.length),
  utah: 100*(utahData.filter(val=>val.videos.length>0).length / utahData.length),
  vermont: 100*(vermontData.filter(val=>val.videos.length>0).length / vermontData.length),
  virginia: 100*(virginiaData.filter(val=>val.videos.length>0).length / virginiaData.length),
  washington: 100*(washingtonData.filter(val=>val.videos.length>0).length / washingtonData.length),
  westVirginia: 100*(westVirginiaData.filter(val=>val.videos.length>0).length / westVirginiaData.length),
  wisconsin: 100*(wisconsinData.filter(val=>val.videos.length>0).length / wisconsinData.length),
  wyoming: 100*(wyomingData.filter(val=>val.videos.length>0).length / wyomingData.length),
};

//Percent Complete by Country
var asiaData = allData.filter(val=>val.state==='Asia' && val.officialSkiResort);
var euoropeData = allData.filter(val=>val.state==='Europe' && val.officialSkiResort);


var countryData = {
  asia: 100*(asiatData.filter(val=>val.videos.length>0).length / asiaData.length),
  europe: 100*(europeData.filter(val=>val.videos.lenght>0).lenght / euoropeData.lenght)
};



// Season start dates
var s1Start = '2016-10-22T16:44:04Z';
var s2Start = '2017-10-13T23:57:51Z';
var s3Start = '2018-10-10T01:59:30Z';
var s4Start = '2019-10-12T03:45:14Z';
var s5Start = '2020-10-25T22:45:12Z';
  
// Season resorts
var s0Resorts = [];
var s1Resorts = [];
var s2Resorts = [];
var s3Resorts = [];
var s4Resorts = [];
var s5Resorts = [];

// Sort the video data
var videoDataSorted = videoData.sort((a,b)=>new Date(a.date).getTime()-new Date(b.date).getTime());

// Get all new resorts for all seasons
for (var i=0; i<videoDataSorted.length; i++) {

  // Get resort name of the official ski resorts
  var resortName;
  var validResort = allData.filter(val => val.officialSkiResort)
                           .filter(val => val.videos.includes(videoDataSorted[i].id));

  // Only count valid resorts
  if (validResort.length > 0) {
    resortName = validResort[0].resortName;
    // Get new resorts traveled to for season 0
    if (new Date(videoDataSorted[i].date) < new Date(s1Start)) {
      var visitedResorts = s0Resorts;
      if (!visitedResorts.includes(resortName)) {
        s0Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 1
    else if (new Date(videoDataSorted[i].date) >= new Date(s1Start) && new Date(videoDataSorted[i].date) < new Date(s2Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts);
      if (!visitedResorts.includes(resortName)) {
        s1Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 2
    else if (new Date(videoDataSorted[i].date) >= new Date(s2Start) && new Date(videoDataSorted[i].date) < new Date(s3Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts);
      if (!visitedResorts.includes(resortName)) {
        s2Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 3
    else if (new Date(videoDataSorted[i].date) >= new Date(s3Start) && new Date(videoDataSorted[i].date) < new Date(s4Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts);
      if (!visitedResorts.includes(resortName)) {
        s3Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 4
    else if (new Date(videoDataSorted[i].date) >= new Date(s4Start) && new Date(videoDataSorted[i].date) < new Date(s5Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts).concat(s4Resorts);
      if (!visitedResorts.includes(resortName)) {
        s4Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 5
    else if (new Date(videoDataSorted[i].date) >= new Date(s5Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts).concat(s4Resorts).concat(s5Resorts);
      if (!visitedResorts.includes(resortName)) {
        s5Resorts.push(resortName);
      }
    }
  }

}

// Get view stats per season
var s0Views = [];
var s1Views = [];
var s2Views = [];
var s3Views = [];
var s4Views = [];
var s5Views = [];

// Mertics by season
var s0Metrics = [];
var s1Metrics = [];
var s2Metrics = [];
var s3Metrics = [];
var s4Metrics = [];
var s5Metrics = [];

// Get all new resorts for all seasons
for (var i=0; i<videoDataSorted.length; i++) {

  videoViews = Number(videoDataSorted[i].views);

  // Get new resorts traveled to for season 0
  if (new Date(videoDataSorted[i].date) < new Date(s1Start)) {
    s0Views.push(videoViews);
    s0Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 1
  else if (new Date(videoDataSorted[i].date) >= new Date(s1Start) && new Date(videoDataSorted[i].date) < new Date(s2Start)) {
    s1Views.push(videoViews);
    s1Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 2
  else if (new Date(videoDataSorted[i].date) >= new Date(s2Start) && new Date(videoDataSorted[i].date) < new Date(s3Start)) {
    s2Views.push(videoViews);
    s2Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 3
  else if (new Date(videoDataSorted[i].date) >= new Date(s3Start) && new Date(videoDataSorted[i].date) < new Date(s4Start)) {
    s3Views.push(videoViews);
    s3Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 4
  else if (new Date(videoDataSorted[i].date) >= new Date(s4Start) && new Date(videoDataSorted[i].date) < new Date(s5Start)) {
    s4Views.push(videoViews);
    s4Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 5
  else if (new Date(videoDataSorted[i].date) >= new Date(s5Start)) {
    s5Views.push(videoViews);
    s5Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }

}

// -------------------
// Graphs
// -------------------

// Resorts by season
var resortsBySeasonTrace = {
  x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
  y: [s0Resorts.length, s1Resorts.length, s2Resorts.length, s3Resorts.length, s4Resorts.length, s5Resorts.length],
  type: 'bar'
};

var resortBySeasonData = [resortsBySeasonTrace];

var resortBySeasonLayout = {
  title:'Number of New Resorts Traveled to by Season',
  yaxis: {
    title: '# of New Resorts',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  }
};

Plotly.newPlot('newResortsBySeason', resortBySeasonData, resortBySeasonLayout);

// // Views by season AVG
// const sum = (arr) => arr.reduce((a, b) => a + b, 0);
// var avg = (array) => array.length > 0 ? Math.floor(array.reduce((a, b) => a + b) / array.length) : 0;

// var s0Avg = avg(s0Views);
// var s0Min = Math.min(...s0Views);
// var s0Max = Math.max(...s0Views);
// var s1Avg = avg(s1Views);
// var s1Min = Math.min(...s1Views);
// var s1Max = Math.max(...s1Views);
// var s2Avg = avg(s2Views);
// var s2Min = Math.min(...s2Views);
// var s2Max = Math.max(...s2Views);
// var s3Avg = avg(s3Views);
// var s3Min = Math.min(...s3Views);
// var s3Max = Math.max(...s3Views);
// var s4Avg = avg(s4Views);
// var s4Min = Math.min(...s4Views);
// var s4Max = Math.max(...s4Views);
// var s5Avg = avg(s5Views);
// var s5Min = Math.min(...s5Views);
// var s5Max = Math.max(...s5Views);

// var viewsBySeasonTraceAvg = {
//   x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
//   y: [s0Avg, s1Avg, s2Avg, s3Avg, s4Avg, s5Avg],
//   type: 'bar'
// };
// // var viewsBySeasonTraceMin = {
// //   x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
// //   y: [s0Min, s1Min, s2Min, s3Min, s4Min, s5Min],
// //   type: 'scatter'
// // };
// // var viewsBySeasonTraceMax = {
// //   x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
// //   y: [s0Max, s1Max, s2Max, s3Max, s4Max, s5Max],
// //   type: 'scatter'
// // };

// var viewsBySeasonData = [viewsBySeasonTraceAvg];
// // var viewsBySeasonData = [viewsBySeasonTraceAvg, viewsBySeasonTraceMin, viewsBySeasonTraceMax];

// var viewsBySeasonLayout = {
//   title:'Average Video Views by Season',
//   yaxis: {
//     title: '# Video Views',
//     fixedrange: true
//   },
//   xaxis: {
//     fixedrange: true
//   }
// };

// Plotly.newPlot('viewsBySeason', viewsBySeasonData, viewsBySeasonLayout);

// // Views by season TOTAL
// var avg = (array) => array.length > 0 ? Math.floor(array.reduce((a, b) => a + b) / array.length) : 0;

// var s0Tot = sum(s0Views);
// var s1Tot = sum(s1Views);
// var s2Tot = sum(s2Views);
// var s3Tot = sum(s3Views);
// var s4Tot = sum(s4Views);
// var s5Tot = sum(s5Views);

// var viewsTotalBySeasonTrace = {
//   x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
//   y: [s0Tot, s1Tot, s2Tot, s3Tot, s4Tot, s5Tot],
//   type: 'bar'
// };

// var viewsTotalBySeasonData = [viewsTotalBySeasonTrace];
// // var viewsBySeasonData = [viewsBySeasonTraceAvg, viewsBySeasonTraceMin, viewsBySeasonTraceMax];

// var viewsTotalBySeasonLayout = {
//   title:'Total Video Views by Season',
//   yaxis: {
//     title: '# Video Views',
//     fixedrange: true
//   },
//   xaxis: {
//     fixedrange: true
//   }
// };

// Plotly.newPlot('viewsTotalBySeason', viewsTotalBySeasonData, viewsTotalBySeasonLayout);


// // Views by Month by Season
// function getAvgViewsByMonth(sData) {

//   var oct = [];
//   var nov = [];
//   var dec = [];
//   var jan = [];
//   var feb = [];
//   var mar = [];
//   var apr = [];
//   var may = [];
//   var jun = [];
//   var jul = [];
//   var aug = [];
//   var sep = [];

//   for (var i=0; i<sData.length; i++) {
//     var myMonth = new Date(sData[i].date).getMonth();
//     if (myMonth === 0) {
//       jan.push(sData[i].views);
//     }
//     else if (myMonth === 1) {
//       feb.push(sData[i].views);
//     }
//     else if (myMonth === 2) {
//       mar.push(sData[i].views);
//     }
//     else if (myMonth === 3) {
//       apr.push(sData[i].views);
//     }
//     else if (myMonth === 4) {
//       may.push(sData[i].views);
//     }
//     else if (myMonth === 5) {
//       jun.push(sData[i].views);
//     }
//     else if (myMonth === 6) {
//       jul.push(sData[i].views);
//     }
//     else if (myMonth === 7) {
//       aug.push(sData[i].views);
//     }
//     else if (myMonth === 8) {
//       sep.push(sData[i].views);
//     }
//     else if (myMonth === 9) {
//       oct.push(sData[i].views);
//     }
//     else if (myMonth === 10) {
//       nov.push(sData[i].views);
//     }
//     else if (myMonth === 11) {
//       dec.push(sData[i].views);
//     }
//   }
//   return [avg(oct), avg(nov), avg(dec), avg(jan), avg(feb), avg(mar), avg(apr), avg(may), avg(jun), avg(jul), avg(aug), avg(sep)]

// }

// var monthsX = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

// var viewsSeason1Trace = {
//   x: monthsX,
//   y: getAvgViewsByMonth(s1Metrics),
//   type: 'scatter',
//   name: 'Season 1'
// };
// var viewsSeason2Trace = {
//   x: monthsX,
//   y: getAvgViewsByMonth(s2Metrics),
//   type: 'scatter',
//   name: 'Season 2'
// };
// var viewsSeason3Trace = {
//   x: monthsX,
//   y: getAvgViewsByMonth(s3Metrics),
//   type: 'scatter',
//   name: 'Season 3'
// };
// var viewsSeason4Trace = {
//   x: monthsX,
//   y: getAvgViewsByMonth(s4Metrics),
//   type: 'scatter',
//   name: 'Season 4'
// };
// var viewsSeason5Trace = {
//   x: monthsX,
//   y: getAvgViewsByMonth(s5Metrics),
//   type: 'scatter',
//   name: 'Season 5'
// };

// var monthData = [viewsSeason1Trace, viewsSeason2Trace, viewsSeason3Trace, viewsSeason4Trace, viewsSeason5Trace];

// var monthLayout = {
//   title:'Avg Views Per Video Per Month',
//   yaxis: {
//     title: '# of Views',
//     fixedrange: true
//   },
//   xaxis: {
//     fixedrange: true
//   }
// };

// Plotly.newPlot('videoViewsByMonth', monthData, monthLayout);

// // Views by Month by Season
// function getTotalViewsByMonth(sData) {

//   var oct = [];
//   var nov = [];
//   var dec = [];
//   var jan = [];
//   var feb = [];
//   var mar = [];
//   var apr = [];
//   var may = [];
//   var jun = [];
//   var jul = [];
//   var aug = [];
//   var sep = [];

//   for (var i=0; i<sData.length; i++) {
//     var myMonth = new Date(sData[i].date).getMonth();
//     if (myMonth === 0) {
//       jan.push(sData[i].views);
//     }
//     else if (myMonth === 1) {
//       feb.push(sData[i].views);
//     }
//     else if (myMonth === 2) {
//       mar.push(sData[i].views);
//     }
//     else if (myMonth === 3) {
//       apr.push(sData[i].views);
//     }
//     else if (myMonth === 4) {
//       may.push(sData[i].views);
//     }
//     else if (myMonth === 5) {
//       jun.push(sData[i].views);
//     }
//     else if (myMonth === 6) {
//       jul.push(sData[i].views);
//     }
//     else if (myMonth === 7) {
//       aug.push(sData[i].views);
//     }
//     else if (myMonth === 8) {
//       sep.push(sData[i].views);
//     }
//     else if (myMonth === 9) {
//       oct.push(sData[i].views);
//     }
//     else if (myMonth === 10) {
//       nov.push(sData[i].views);
//     }
//     else if (myMonth === 11) {
//       dec.push(sData[i].views);
//     }
//   }
//   return [sum(oct), sum(nov), sum(dec), sum(jan), sum(feb), sum(mar), sum(apr), sum(may), sum(jun), sum(jul), sum(aug), sum(sep)]

// }

// var viewsTotalSeason1Trace = {
//   x: monthsX,
//   y: getTotalViewsByMonth(s1Metrics),
//   type: 'scatter',
//   name: 'Season 1'
// };
// var viewsTotalSeason2Trace = {
//   x: monthsX,
//   y: getTotalViewsByMonth(s2Metrics),
//   type: 'scatter',
//   name: 'Season 2'
// };
// var viewsTotalSeason3Trace = {
//   x: monthsX,
//   y: getTotalViewsByMonth(s3Metrics),
//   type: 'scatter',
//   name: 'Season 3'
// };
// var viewsTotalSeason4Trace = {
//   x: monthsX,
//   y: getTotalViewsByMonth(s4Metrics),
//   type: 'scatter',
//   name: 'Season 4'
// };
// var viewsTotalSeason5Trace = {
//   x: monthsX,
//   y: getTotalViewsByMonth(s5Metrics),
//   type: 'scatter',
//   name: 'Season 5'
// };

// var monthTotalData = [viewsTotalSeason1Trace, viewsTotalSeason2Trace, viewsTotalSeason3Trace, viewsTotalSeason4Trace, viewsTotalSeason5Trace];

// var monthTotalLayout = {
//   title:'Total Views Per Month',
//   yaxis: {
//     title: '# of Views',
//     fixedrange: true
//   },
//   xaxis: {
//     fixedrange: true
//   }
// };

// Plotly.newPlot('totalViewsPerMonth', monthTotalData, monthTotalLayout);