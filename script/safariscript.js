var app=angular.module('myApp', ['meterGauge']);
app.controller('myAppController',function($scope,$interval){
    $scope.classic = {
            gaugeRadius: 90,
            minVal: 0,
            maxVal: 120,
            needleVal: $scope.speedometer,
            tickSpaceMinVal: 10,
            tickSpaceMajVal: 20,
            divID: "gaugeBox",
            gaugeUnits: "mph",
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
            $scope.classic.needleVal =$scope.speedometer
  });
});