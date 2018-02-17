var app=angular.module('myApp', ['meterGauge']);
app.controller('myAppController',function($scope,$interval){
    $scope.classic = {
            gaugeRadius: 140,
            minVal: 0,
            maxVal: 1000,
            needleVal: Math.round(700),
            tickSpaceMinVal: 10,
            tickSpaceMajVal: 100,
            divID: "gaugeBox",
            gaugeUnits: "Kmh",
            tickColMaj:'black',
            tickColMin:'#656D78',
            outerEdgeCol:'blue',
            pivotCol:'#434A54',
            innerCol:'#E6E9ED',
            unitsLabelCol:'#656D78',
            tickLabelCol:'#656D78',
            needleCol:'#434A54',
            defaultFonts:''
        }
 $interval(function(){
            $scope.classic.needleVal =Math.round( Math.random()*1000)
  },2000);
});