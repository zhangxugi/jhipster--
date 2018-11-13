import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ScoresLevelPipe'
})
export class ScoresLevelPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    //searchText 是input标签的参数。RegExp正则表达式
    let searchText = new RegExp(args, 'ig');
    //data遍历集合的别名 search搜索，必须是string
    return value.filter(driver => {
      if (driver.dname) {
        return driver.dname.search(searchText) !== -1
      }
    });
  }


}
