var videoData = 

// Last updated date
newResortStatsLastUpdated = '05/24/21';

// Percentage Complete by Region
var midwestData = allData.filter(val=>val.region==='Midwest' && val.officialSkiResort);
var westCoastData = allData.filter(val=>val.region==='West Coast' && val.officialSkiResort);
var rockyMountainData = allData.filter(val=>val.region==='Rocky Mountains' && val.officialSkiResort);
var newEnglandData = allData.filter(val=>val.region==='New England' && val.officialSkiResort);
var midAtlanticData = allData.filter(val=>val.region==='Mid-Atlantic' && val.officialSkiResort);
var southeastData = allData.filter(val=>val.region==='Southeast' && val.officialSkiResort);
var coloradoData = allData.filter(val=>val.state==='Colorado' && val.officialSkiResort);
var asiaData = allData.filter(val=>val.region==='Asia' && val.officialSkiResort);
var europeData = allData.filter(val=>val.region==='Europe' && val.officialSkiResort),


var regionData = {
  midwest: 100*(midwestData.filter(val=>val.videos.length>0).length / midwestData.length),
  westCoast: 100*(westCoastData.filter(val=>val.videos.length>0).length / westCoastData.length),
  rockyMountain: 100*(rockyMountainData.filter(val=>val.videos.length>0).length / rockyMountainData.length),
  newEngland: 100*(newEnglandData.filter(val=>val.videos.length>0).length / newEnglandData.length),
  midAtlantic: 100*(midAtlanticData.filter(val=>val.videos.length>0).length / midAtlanticData.length),
  southeast: 100*(southeastData.filter(val=>val.videos.length>0).length / southeastData.length),
  asia: 100*(asiaData.filter(val=>val.videos.length>0).lenght / asiaData.length),
  europe: 100*(europeData.filter(val=>val.videos.length>0).lenght / europeData.length),
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
var europeData = allData.filter(val=>val.state==='Europe' && val.officialSkiResort);


var countryData = {
  asia: 100*(asiatData.filter(val=>val.videos.length>0).length / asiaData.length),
  europe: 100*(europeData.filter(val=>val.videos.lenght>0).lenght / europeData.lenght)
};

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
  }
}
