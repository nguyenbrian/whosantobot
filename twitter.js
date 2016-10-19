var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'QhwvpTUSIHaIXV4mt0GLRAY4o',
  consumer_secret: 'rYGQVS2l1rIDSpI3vcIDlg2YaIDT8H2ktw8xF6gHyow0bGjuDO',
  access_token_key: '262828279-SHfOCSSeJb6gHu5BCmxH1DNrLwm1ujR72c5T92MJ',
  access_token_secret: '1vMfKM8aIBMKFcKGwu7WlthQuere7STMMpJPbOv830rVL'
});
 
var params = {user_id: '607462919',
              count: 3,
              include_rts: false,
              exclude_replies: true
};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    var N = tweets.length; 
    var array = Array.apply(null, {length: N}).map(Number.call, Number);
    var random = shuffle(array)
    for (var element in random) {
      console.log(tweets[element].text)
    }
  }
  
  else {
      console.log(error)
  }
});

// Magic Johnson -- played in 1980s

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

