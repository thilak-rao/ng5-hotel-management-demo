import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {convertToParamMap, ParamMap} from '@angular/router';

@Injectable()
export class ActivatedRouteStub {
  private subjectParamMap = new BehaviorSubject(convertToParamMap(this.testParamMap));
  private subjectQueryParamMap = new BehaviorSubject(convertToParamMap(this.testParamMap));
  private _testParamMap: ParamMap;
  private _testQueryParamMap: ParamMap;

  paramMap = this.subjectParamMap.asObservable();

  get testParamMap() {
    return this._testParamMap;
  }

  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subjectParamMap.next(this._testParamMap);
  }

  queryParamMap = this.subjectQueryParamMap.asObservable();

  get testQueryParamMap() {
    return this._testQueryParamMap;
  }

  set testQueryParamMap(params: {}) {
    this._testQueryParamMap = convertToParamMap(params);
    this.subjectQueryParamMap.next(this._testQueryParamMap);
  }

  get snapshot() {
    return {
      paramMap: this.testParamMap,
      queryParamMap: this.testQueryParamMap
    };
  }
}
