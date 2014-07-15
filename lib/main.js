
(function () {
  var exec = require("exec");
  
  var args = process.argv.slice(2);
  //console.log(process.argv);
  //console.log(args)
  
  var formattedArgs = "";
  args.forEach(function(arg) {
    formattedArgs += " " + arg;
  });
  
  exec("java -jar ./bin/owLint.jar " + formattedArgs, function(err, out, code) {
    if (err instanceof Error)
      throw err;
    process.stderr.write(err);
    process.stdout.write(out);
    process.exit(code);	    
  });
}).call(this);


