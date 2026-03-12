import { Injectable } from '@angular/core';
import { ISkill } from '../shared/circular-skill-chart/circular-skill-chart';

@Injectable({ providedIn: 'root' })
export class SkillApiService {
  private apiUrl = '/api/skills';

  private defaultSkills: ISkill[] = [
    { name: 'React', percent: 90 },
    { name: 'CSS', percent: 75 },
    { name: 'Next.js', percent: 60 },
    { name: 'JavaScript', percent: 85 },
    { name: 'Angular', percent: 70 },
  ];

  async getSkills(): Promise<ISkill[]> {
    const res = await fetch(this.apiUrl);
    if (!res.ok) {
      // se l'API è vuota, ritorna default
      return [...this.defaultSkills];
    }
    const skills = await res.json();
    return skills.length ? skills : [...this.defaultSkills];
  }

  // POST /api/skills
  async addSkill(skill: ISkill): Promise<ISkill> {
    const res = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(skill),
    });
    if (!res.ok) throw new Error("Errore durante l'aggiunta della skill");
    return res.json();
  }

  // DELETE /api/skills/:name
  async deleteSkill(name: string): Promise<void> {
    const res = await fetch(`${this.apiUrl}/${encodeURIComponent(name)}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Errore durante la cancellazione della skill');
  }
}
