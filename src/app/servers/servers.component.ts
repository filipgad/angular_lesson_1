import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = 'Example name';
    userName = '';
    serverCreated = false;
    servers = ['Testserver', 'Testserver 2'];
    showInfo = false;
    showClicks = [];


    constructor() { 
        setTimeout( () => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onClickDisplay() {
        this.showInfo = !this.showInfo;
        this.showClicks.push(this.showClicks.length + 1);
    }
}
