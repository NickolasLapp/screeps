var Spawner = {
    /** @param {spawn} spawn**/
    spawn: function(spawn) {
      var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
      console.log('Harvesters: ' + harvesters.length);

      if(harvesters.length < 2) {
          var new_name = 'Harvester' + Game.time;
          console.log('Spawning new harvester: ' + new_name);
          Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], new_name,
              {memory: {role: 'harvester'}});
      }
    }
};

module.exports = Spawner;
