import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);

  constructor() { }

  async thirdPartyLogin(){
    
    let { data, error } = await this.supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    
  }

}
