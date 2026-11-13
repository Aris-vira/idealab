import { Injectable } from '@angular/core';

interface Note {
  frequency: number;
  start: number;
  duration: number;
}

@Injectable({ providedIn: 'root' })
export class SoundService {
  private context: AudioContext | null = null;

  playSave(): void {
    this.play(
      [
        { frequency: 523.25, start: 0, duration: 0.14 },
        { frequency: 783.99, start: 0.09, duration: 0.24 },
      ],
      'sine',
      0.18,
    );
  }

  playRemove(): void {
    this.play(
      [
        { frequency: 392, start: 0, duration: 0.12 },
        { frequency: 261.63, start: 0.08, duration: 0.2 },
      ],
      'triangle',
      0.14,
    );
  }

  private play(notes: Note[], type: OscillatorType, volume: number): void {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    for (const note of notes) {
      const start = now + note.start;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = type;
      oscillator.frequency.value = note.frequency;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + note.duration);
      oscillator.connect(gain).connect(ctx.destination);
      oscillator.start(start);
      oscillator.stop(start + note.duration + 0.02);
    }
  }

  private getContext(): AudioContext | null {
    if (!this.context) {
      try {
        this.context = new AudioContext();
      } catch {
        return null;
      }
    }
    if (this.context.state === 'suspended') void this.context.resume();
    return this.context;
  }
}
