// Dummy data only. Replace with API-loaded master data in the next phase.
window.FIRS_DATA={
employees:["Ahmad Pratama","Budi Santoso","Ilham Hazetra","Dedi Kurniawan","Rizky Maulana","Siti Rahma","Fajar Nugroho","Andi Saputra"],
areas:["Wood Handling","Cooking","Washing","Screening","Oxygen Delignification","Bleaching","Chemical Preparation"],
equipment:[
{tag:"FCV-1001",type:"Control Valve",description:"Cooking liquor flow control valve",area:"Cooking"},
{tag:"PCV-1002",type:"Control Valve",description:"Digester pressure control valve",area:"Cooking"},
{tag:"LCV-1003",type:"Control Valve",description:"Level control valve",area:"Cooking"},
{tag:"PT-1003",type:"Pressure Transmitter",description:"Pressure measurement",area:"Cooking"},
{tag:"TT-1004",type:"Temperature Transmitter",description:"Temperature measurement",area:"Cooking"},
{tag:"LT-2001",type:"Level Transmitter",description:"Level measurement",area:"Washing"},
{tag:"FT-3001",type:"Flowmeter",description:"Flow measurement",area:"Screening"},
{tag:"PDT-4001",type:"Differential Pressure Transmitter",description:"Differential pressure measurement",area:"Bleaching"},
{tag:"AT-5001",type:"Analyzer",description:"Process analyzer",area:"Oxygen Delignification"},
{tag:"FT-6001",type:"Flowmeter",description:"Chemical flow measurement",area:"Chemical Preparation"},
{tag:"XV-7001",type:"On/Off Valve",description:"Isolation valve",area:"Wood Handling"}],
issues:[
["Control Valve","Actuator","Air leakage"],["Control Valve","Actuator","Diaphragm damaged"],["Control Valve","Positioner","Position feedback error"],["Control Valve","Positioner","Calibration required"],["Control Valve","Valve Body","Internal leakage"],["Control Valve","Valve Body","Stuck / jammed"],
["Pressure Transmitter","Transmitter","Unstable reading"],["Pressure Transmitter","Transmitter","No signal"],["Temperature Transmitter","Sensor","Open circuit"],["Temperature Transmitter","Transmitter","Unstable reading"],
["Level Transmitter","Probe / Sensor","Incorrect measurement"],["Level Transmitter","Transmitter","No signal"],["Flowmeter","Sensor","No signal"],["Flowmeter","Transmitter","Unstable reading"],
["Differential Pressure Transmitter","Transmitter","Zero drift"],["Differential Pressure Transmitter","Impulse Line","Blocked impulse line"],["Analyzer","Sensor","Sensor failure"],["Analyzer","Sample System","Sample flow low"],["On/Off Valve","Actuator","Fail to open / close"],["On/Off Valve","Solenoid Valve","Solenoid failure"]
].map(([type,part,issue])=>({type,part,issue}))
};