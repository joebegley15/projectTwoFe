//jQuery.ajax
var CeeLoo = CeeLoo || {};
$(function() {
  'use strict';
  var gameWatcher;
  // var sa = 'https://young-citadel-2431.herokuapp.com';
  var sa = 'https://pure-spire-9680.herokuapp.com';
  $('#register').on('click', function(e) {
    $.ajax(sa + '/users', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val(),
          password_confirmation: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr){
      localStorage.setItem('token', data.token);
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('registration failed');
    });
  });

  $('#list').on('click', function(e) {
    $.ajax(sa + '/users', {
      dataType: 'json',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + localStorage['token']
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('list failed');
    });
  });

  $('#create').on('click', function(e) {
    $.ajax(sa + '/games', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + localStorage['token']
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('create failed');
    });
  });

  $('#show').on('click', function(e) {
    $.ajax(sa + '/games/' + $('#id').val(), {
      dataType: 'json',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + localStorage['token']
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('show failed');
    });
  });

  var postTheGame = function() {
    $.ajax(sa + '/games/', {
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + localStorage['token']
      },
      data: {
        game: {
          user_dice: CeeLoo.$yourDice,
          cpu_dice: CeeLoo.$cpuDice,
          player_score: CeeLoo.$userScore,
          cpu_score: CeeLoo.$cpuScore
        }
      }
    }).done(function(data){
      $('#result').val(JSON.stringify(data));
      getWinLoss();
    }).fail(function(data){
      $('#result').val(JSON.stringify("Failed"));
    });
  }


  $("#game-start-button").on('click', function(){
    if ((CeeLoo.$userScore > 0) && (CeeLoo.$cpuScore > 0)) {
      postTheGame();
    }
  });

  $('#move').on('click', function(e){
    $.ajax(sa + '/games/' + $('#id').val(), {
      if (localStorage.token == undefined) {
        return;
      }
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        game: {
          cell: {
            index: +$('#index').val(),
            value: $('#value').val()
          }
        }
      }),
      dataType: 'json',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + localStorage['token']
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('move failed');
    });
  });

  var getWinLoss = function () {
    var userId = localStorage.getItem('userId');

    $.ajax(sa + '/users/' + userId, {
      dataType: 'json',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + localStorage['token']
      }
    }).done(function(data, textStatus, jqxhr){
      console.log(data);
      $('#user-lifetime').html(JSON.stringify(data.user.wins));
      $('#cpu-lifetime').html(JSON.stringify(data.user.losses));

    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('list failed');
    });
  };

  var loginHandler = function () {
    $.ajax(sa + '/login', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr){
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.id);
      getWinLoss();
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('login failed');
    });
  };

  $('#login').on('click', function(e) {
    loginHandler();
  });
});

