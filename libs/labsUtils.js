LabsUtils = function() {

    // var scope = this;

    this.rootDirectory = "images/";
    this.membersDirectory = this.rootDirectory + "membersPhoto/";
    this.labelsDirectory = this.rootDirectory + "labels/";
    this.subFolder = this.membersDirectory + "recortadas/";
    this.subFolderCircular = this.membersDirectory + "circular/";
    this.subFolderInfo = this.membersDirectory + "info/";
    this.subFolderMediaControls = this.rootDirectory + "mediaControls/";
    this.extension = ".png";
    this.initialPosition = {x: -1.6, y: 1.8, z: -10};
    this.makerName = 'maker';
    this.radicalName = 'radical';
    this.researchName = 'research';
    this.jefesName = 'jefes';
    this.nobodyName = 'nobody';
    this.comunicacionName = 'comunicacion';
    this.agoraName = 'agora';
    this.mediaNameStop = 'media-stop';
    this.mediaNamePause = 'media-pause';
    this.mediaNameClose = 'media-close';
    this.mediaNamePlay = 'media-play';
    this.reticulumNear = 0.2;
    this.reticulumFar = 8;
    this.reticleColors = {
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
            dark: 0xD89939
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
        {name: this.agoraName, position: {x: 2, y: 1.2, z: 1}}, 
        {name: this.radicalName, position: {x: -3.1, y: 1.2, z: -5}}, 
        {name: this.makerName, position: {x: -2.6, y: 1.2, z: -11}}
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