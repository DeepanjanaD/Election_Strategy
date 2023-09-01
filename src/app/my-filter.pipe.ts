import { Pipe, PipeTransform } from '@angular/core';
import { VoterData } from './voter-data/voterData';

@Pipe({
  name: 'myFilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {

  transform(items: VoterData[], filter: any): VoterData[] {
    if (!items || !filter || (filter.community.communityId == "" || filter.caste.casteId == "" || filter.category.categoryId == "" || filter.ageGroup.ageGroupId == "" || filter.colony.colonyId == "" || filter.booth.boothId == "" )) {
      return items;
    }
    
    return items.filter(item =>
      this.doesVoterDataMatchFilter(item, filter)
    );
  }

  private doesVoterDataMatchFilter(voterData: VoterData, filter: any): boolean {
    if (filter.category.categoryId== voterData.category.categoryId && filter.community.communityId == voterData.community.communityId && filter.caste.casteId == voterData.caste.casteId && filter.ageGroup.ageGroupId == voterData.ageGroup.ageGroupId && filter.colony.colonyId == voterData.colony.colonyId && filter.booth.boothId == voterData.booth.boothId) {
      console.log("category matched");
      return true;
    }
    else{
      return false;
    }
}

}

