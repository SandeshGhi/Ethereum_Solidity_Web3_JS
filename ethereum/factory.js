import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x81CF0Ecdd5FEe77cE7E3843656CD8E2A912796b0'
);

export default instance;
