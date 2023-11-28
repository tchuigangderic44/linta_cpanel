class AudiosService {
    static audios:  HTMLAudioElement[] = [];

    public static playAudio(path: string) {
        this.removeAudio(path);
        let audio = new Audio();
        audio.src = path;
        audio.load();
        audio.play();
        this.audios.push(audio);
    }

    public static pauseAudio(path: string) {
        let audioIndex: number = this.audios.findIndex((audio: HTMLAudioElement) => audio.src.includes(path));
        this.audios[audioIndex].pause();
        this.audios[audioIndex].currentTime = 0;

    }

    public static removeAudio(path: string) {
        let audioIndex: number = this.audios.findIndex((audio : HTMLAudioElement) => audio.src.includes(path));

        if (audioIndex != -1) {
            this.audios.splice(audioIndex, 1);
        }
    }

    public static stopAllAudio() {
        this.audios.forEach(audio => { audio.pause(); audio.currentTime = 0 });
    }
}

