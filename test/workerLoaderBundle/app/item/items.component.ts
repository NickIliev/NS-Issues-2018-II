import { Component, OnInit } from "@angular/core";


import { WorkerService } from "../worker.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    private firstWorker: Worker;
    private secondWorker: Worker;

    constructor(private workerService: WorkerService) { }

    ngOnInit() {
        this.firstWorker = this.workerService.initTsWorker();
        this.secondWorker = this.workerService.initJsWorker();

        this.firstWorker.postMessage("Hello, JS!");
        this.secondWorker.postMessage("Hello, TS!");

        this.firstWorker.onmessage = m => this.logWorkerMessage(m);
        this.secondWorker.onmessage = m => this.logWorkerMessage(m);
    }

    private logWorkerMessage(message: MessageEvent) {
        console.log(message.data);
    }
}