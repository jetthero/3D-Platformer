var myGame = {
  config : {
      lives: 3,
      speed : .7,
      jumpButton : 32,
      leftButton : 65,
      rightButton : 68,
      gravity : -0.9,
      jumpForce : 6,
      actionButton: 'leftmouse',
      playerSettings : {
        meshName: 'Player',
        rootUrl: '/models/',
        file:'jett.babylon',
        spawnPoint : 'InitialSpawn',
        animationsSetup : [
          {
            name : 'walk',
            start : 20,
            end : 59,
            options : {
              ratio: 2.4
            }
          },
          {
            name : 'hit',
            start:110,
            end : 120,
            options : {
              loop : false,
              ratio : 1
            }
          },
          {
            name : 'jump',
            start : 80,
            end : 100,
            options : {
              ratio : 2,
              loop : false
            }
          }
        ],
        rotationValues : {
          left : Math.PI,
          right : 0
        },

        scale : {
          x: .5,
          y: .5,
          z : 2
        },
        boundsOffset : {
          z : .5,
          x : .5,
          y: 1.8
        },
        boundsSize : {
          z : 1,
          x : 1,
          y: 1.5
        }
      },
      screenImages : [
        {
          src:'/images/start.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 0,
          y : 0,
          z : -30
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic

  }
};

function start(){
    myGame.game = new A3D.Game.Platformer(myGame.config);
    myGame.game.loadScene('/scenes/','platformer.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
