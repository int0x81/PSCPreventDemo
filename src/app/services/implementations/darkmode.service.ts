import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DarkModeService {

    private currentState: boolean;

    /**
     * Feeding this subject toggles the dark mode
     * across the whole app
     */
    public darkModeSubject: Subject<void> = new Subject<void>();
    
    
    constructor() {

        this.currentState = this.ascertainDarkMode();

        this.darkModeSubject.subscribe(() => this.currentState = !this.currentState);
    }

    public getDarkModeState() {
        return this.currentState;
    }

    /**
     * Ascertains which theme to use on start up
     */
    private ascertainDarkMode(): boolean {
        return false;
    }
}