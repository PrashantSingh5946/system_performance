const OS = require('os');
const printSpecs =() =>
{
    console.clear();
    console.log("System name: "+OS.hostname());
    console.log("Total cores: "+OS.cpus().length);
    console.log("Architecture: "+OS.arch());
    console.log("Total Memory: "+OS.totalmem()+" bytes");
    console.log("Memory in use: "+OS.freemem()+" bytes");
    console.log("Memory utilization:"+ OS.freemem()/OS.totalmem()*100+" %")

}


setInterval(printSpecs,200);