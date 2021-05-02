import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {postes, responses} from '../testpost';


// @ts-ignore
@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css'],
})
export class TranslatorComponent implements OnInit {
  output: any | undefined;
  output2: any | undefined;

  donne: postes | undefined;
  texts: responses | undefined;
  themodel = new FormControl('');
  totranslate2 = new FormControl('');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  sendPostReq(texte: string , language: string): Observable<object> {
    const body = {
      model: language,
      text: texte
    };
  //  console.log(body);
    return this.http.post('/spacy', body);
  }
  // tslint:disable-next-line:typedef
  sendD(text: string, model: string) {
    // console.log(text + ' ' + model );
    this.sendPostReq(text, model).subscribe(( data: any )  => {
     // console.log(data);
      this.output = data.words;
      this.output2 = data.arcs;
      // console.log('test');
      // @ts-ignore
      // this.output = JSON.parse( data );
    });
  }
}
