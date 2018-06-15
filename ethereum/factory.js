import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x81884Ed95d092Db9d4CdD9c5BBC4657D3E35b3ED'
);

export default instance;
