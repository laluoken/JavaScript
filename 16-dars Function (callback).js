"use strict"

function playFootball(player, callback) {
  console.log(`Name of player ${player}`);
  callback();
}

function goals () {
  console.log("his shot 100 goals");
}

playFootball("moSalah", goals);
