LabsUtils = function() {

    // var scope = this;

    this.rootDirectory = "images/";
    this.membersDirectory = this.rootDirectory + "membersPhoto/";
    this.labelsDirectory = this.rootDirectory + "labels/";
    this.subFolder = this.membersDirectory + "recortadas/";
    this.subFolderCircular = this.membersDirectory + "circular/";
    this.subFolderInfo = this.membersDirectory + "info/";
    this.subFolderMediaControls = this.rootDirectory + "mediaControls/";
    this.subFolderInfoBox = this.rootDirectory + "infoBox/";
    this.extension = ".png";
    this.initialPosition = {x: -1.6, y: 1.8, z: -10};
    this.initialPositionTutorial = {x: 200, y: 1.8, z: -400};
    this.defaultObjectElevation = 1.8;
    this.objectScale = {
        normal: 1,
        big: 1.5,
        huge: 4
    };
    this.makerName = 'maker';
    this.radicalName = 'radical';
    this.researchName = 'research';
    this.jefesName = 'jefes';
    this.nobodyName = 'nobody';
    this.comunicacionName = 'comunicacion';
    this.agoraName = 'agora';
    this.tele1Name = 'tele1';
    this.tele2Name = 'tele2';
    this.mediaNameStop = 'media-stop';
    this.mediaNamePause = 'media-pause';
    this.mediaNameClose = 'media-close';
    this.mediaNamePlay = 'media-play';
    this.reticulumRestPoint = 1;
    this.reticulumDefaultVibrate = 0;
    this.reticulumNear = 0.2;
    this.reticulumFar = 8;
    this.reticulumDefaultProximity = false;
    this.reticulumDefaultReticleVisibility = true;
    this.reticulumDefaultFuseVisibility = true;
    this.reticulumDefaultClickCancelFuse = false;
    this.reticleDurations = {
        slow: 2,
        medium: 1.5,
        fast: 1,
        fastest: 0.5,
        hoverChange: 5
    };
    this.reticleColors = {
        pink: 0xff00e7,
        basic: 0x00fff6,
        blue: {
            light: 0x9DB7DA,
            dark: 0x2E568E
        },
        green: {
            light: 0x9ADEBD,
            dark: 0x137B49
        },
        red: {
            light: 0xFF9087,
            dark: 0xeb2348
        },
        yellow: {
            light: 0xFFD087,
            dark: 0xD89939,
            bright: 0xfdff00
        },
        purple: 0x660066
    };
    this.objectColors = {
        initial: this.reticleColors.yellow.dark,
        highlight: 0xffd53a,
        closest: 0xffd53a
    };
    this.reticleSizes = {
        normal: {
            inner: 0.001,
            outer: 0.006
        }, 
        hover: {
            inner: 0.02,
            outer: 0.024
        },
        fuse: {
            inner: 0.045,
            outer: 0.06
        }
    };
    this.reticulumDefaultConfig = {
      proximity: this.reticulumDefaultProximity,
      near: this.reticulumNear, // near factor of the raycaster (shouldn't be negative and should be smaller than the far property)
      far: this.reticulumFar,
      vibrate: this.reticulumDefaultVibrate,
      reticle: {
        visible: this.reticulumDefaultReticleVisibility,
        restPoint: this.reticulumRestPoint, // Defines the reticle's resting point when no object has been targeted
        color: this.reticleColors.pink,
        innerRadius: this.reticleSizes.normal.inner, // inner reticle radius when nothing is selected
        outerRadius: this.reticleSizes.normal.outer, // outer reticle radius when nothing is selected
        hover: {
          color: this.reticleColors.pink,
          innerRadius: this.reticleSizes.hover.inner, // inner reticle radius when reticle passes over the object
          outerRadius: this.reticleSizes.hover.outer, // outer reticle radius when reticle passes over the object
          speed: this.reticleDurations.hoverChange,
          vibrate: this.reticulumDefaultVibrate // Set to 0 or [] to disable
        }
      },
      click: {
        vibrate: this.reticulumDefaultVibrate
      },
      hover: {
        vibrate: this.reticulumDefaultVibrate
      },
      fuse: {
        visible: this.reticulumDefaultFuseVisibility,
        duration: this.reticleDurations.medium,
        color: this.reticleColors.basic,
        innerRadius: this.reticleSizes.fuse.inner, // inner fuse radius when reticle is loading the interaction
        outerRadius: this.reticleSizes.fuse.outer, // outer fuse radius when reticle is loading the interaction
        vibrate: this.reticulumDefaultVibrate, // Set to 0 or [] to disable
        clickCancelFuse: this.reticulumDefaultClickCancelFuse // If users clicks on targeted object fuse is canceled
      }
    };

    this.radicalMembers = [
        {name: 'alvaro', position: {x: -5.8, y: 1.6, z: -2.4}},
        {name: 'sergio', position: {x: -6.4, y: 1.6, z: -4.2}},
        {name: 'adrian', position: {x: -5.8, y: 1.6, z: -5.4}},
        {name: 'ira', position: {x: -4, y: 1.6, z: -6}},
        {name: 'salva', position: {x: -4, y: 1.6, z: -2.2}},
        {name: 'jota', position: {x: -3.6, y: 1.4, z: -3.8}}
    ];
    this.researchMembers = [
        {name: 'mario', position: {x: -6, y: 1.6, z: 2.2}},
        {name: 'fernando', position: {x: -6, y: 1.6, z: 0.7}},
        {name: 'ricardo', position: {x: -4.6, y: 1.6, z: 0.2}},
        {name: 'enrique', position: {x: -3.6, y: 1.6, z: -0.3}},
        {name: 'samuel', position: {x: -3.4, y: 1.6, z: 2.4}}
    ];
    this.jefesAndVenturesMembers = [
        {name: 'carlosm', position: {x: -6, y: 1.6, z: 6}},
        {name: 'lucas', position: {x: -6, y: 1.6, z: 4.5}},
        {name: 'nieves', position: {x: -4.6, y: 1.6, z: 6.2}},
        {name: 'jesus', position: {x: -4.6, y: 1.6, z: 4}},
        {name: 'carlosg', position: {x: -3.6, y: 1.6, z: 6.3}},
        {name: 'marian', position: {x: -3.2, y: 1.3, z: 5.5}},
        // {name: 'pablo', position: {x: -3.6, y: 1.6, z: 4}}
    ];
    this.comunicacionMembers = [
        // {name: 'marta', position: {x: -6, y: 1.6, z: 12}},
        // {name: 'javi', position: {x: -4.6, y: 1.6, z: 13.7}},
        // {name: 'patri', position: {x: -4.6, y: 1.6, z: 11.8}},
        // {name: 'ade', position: {x: -3.4, y: 1.6, z: 14.1}},
        // {name: 'kat', position: {x: -3.4, y: 1.6, z: 11.5}}
    ];
    this.mediaControls = [
        {name: this.mediaNameStop, path: 'stop.png', position: {x: 0, y: 0, z: -1}},
        {name: this.mediaNamePause, path: 'pause.png', position: {x: 0, y: 0, z: -1}},
        {name: this.mediaNameClose, path: 'close.png', position: {x: 0, y: 0, z: -1}},
        {name: this.mediaNamePlay, path: 'play.png', position: {x: 0, y: 0, z: 0}}
    ];
    this.labelPoints = [
        {name: this.comunicacionName, position: {x: -2.6, y: 1.2, z: 12.7}}, 
        {name: this.nobodyName, position: {x: -2.6, y: 1.2, z: 8.7}}, 
        {name: this.jefesName, position: {x: -2.6, y: 1.2, z: 5}},
        {name: this.researchName, position: {x: -2.6, y: 1.2, z: 1}},
        {name: this.agoraName, position: {x: 2.5, y: 1.2, z: 1}}, 
        {name: this.radicalName, position: {x: -3.1, y: 1.2, z: -5}}, 
        {name: this.makerName, position: {x: -2.6, y: 1.2, z: -11}}, 
        {name: this.tele1Name, position: {x: -1.4, y: 2.4, z: 1}}, 
        {name: this.tele2Name, position: {x: -1.4, y: 2.4, z: 8.4}}
    ];

    this.isRadicalMember = function(memberObject) {
        for (var i = 0; i < this.radicalMembers.length; i++) {
          if (memberObject.name === this.radicalMembers[i].name) {
            return true;
          }
        }
        return false;
    }

    this.isResearchMember = function(memberObject) {
        for (var i = 0; i < this.researchMembers.length; i++) {
          if (memberObject.name === this.researchMembers[i].name) {
            return true;
          }
        }
        return false;
    }

    this.isJefesAndVenturesMember = function(memberObject) {
        for (var i = 0; i < this.jefesAndVenturesMembers.length; i++) {
          if (memberObject.name === this.jefesAndVenturesMembers[i].name) {
            return true;
          }
        }
        return false;
    }

    this.isComunicacionMember = function(memberObject) {
        for (var i = 0; i < this.comunicacionMembers.length; i++) {
          if (memberObject.name === this.comunicacionMembers[i].name) {
            return true;
          }
        }
        return false;
    }

};