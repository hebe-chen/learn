define(function() {
  function _showName(name){
    console.log(name)
  }
  return {
    say:function(words){
      console.log(words)
    },
    showName:function(){
      _showName(name)
    }
  }
});
