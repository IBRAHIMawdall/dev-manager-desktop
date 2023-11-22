import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileItem} from "../../types";
import {FileSizeOptionsBase} from "filesize";

@Component({
    selector: 'app-files-table',
    templateUrl: './files-table.component.html',
    styleUrls: ['./files-table.component.scss']
})
export class FilesTableComponent {

    @Input()
    items?: FileItem[];

    @Output()
    opened: EventEmitter<FileItem> = new EventEmitter<FileItem>();

    @Output()
    selected: EventEmitter<FileItem[] | null> = new EventEmitter<FileItem[] | null>();

    sizeOptions: FileSizeOptionsBase = {base: 2, standard: "jedec"};

    selectedItems: FileItem[] | null = null;

    constructor() {
    }

    openItem(file: FileItem): void {
        this.selectedItems = null;
        this.selected.emit(this.selectedItems);
        this.opened.emit(file);
    }

    selectItem(file: FileItem): void {
        this.selectedItems = [file];
        this.selected.emit(this.selectedItems);
    }

}
