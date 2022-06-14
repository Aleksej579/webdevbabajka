<template>
    <div class="wrapper">
        <div ref="textEl" id="text">{{ text }}</div>
        <div class="buttons">
            <button ref="playEl" @click="play" id="play" class="border border-slate-800 px-1">Play</button>
            <button ref="pauseEl" @click="pause" id="pause" disabled
                class="border border-slate-800 px-1 mx-2">Pause</button>
            <button ref="stopEl" @click="stop" id="stop" disabled class="border border-slate-800 px-1">Stop</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumSo let me help you remember.'
        }
    },
    methods: {
        play() {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.resume();
            } else {
                const utterance = new SpeechSynthesisUtterance(this.text);
                utterance.addEventListener('start', this.handleStart);
                utterance.addEventListener('pause', this.handlePause);
                utterance.addEventListener('resume', this.handleResume);
                utterance.addEventListener('end', this.handleEnd);
                window.speechSynthesis.speak(utterance);
            }
        },
        pause() {
            window.speechSynthesis.pause();
        },
        stop() {
            window.speechSynthesis.cancel();
            handleEnd();
        },
        handleStart() {
            this.$refs.playEl.disabled = true;
            this.$refs.pauseEl.disabled = false;
            this.$refs.stopEl.disabled = false;
        },
        handlePause() {
            this.$refs.playEl.disabled = false;
            this.$refs.pauseEl.disabled = true;
            this.$refs.stopEl.disabled = false;
        },
        handleResume() {
            this.$refs.playEl.disabled = true;
            this.$refs.pauseEl.disabled = false;
            this.$refs.stopEl.disabled = false;
        },
        handleEnd() {
            this.$refs.playEl.disabled = false;
            this.$refs.pauseEl.disabled = true;
            this.$refs.stopEl.disabled = true;
        },
    },
}
</script>