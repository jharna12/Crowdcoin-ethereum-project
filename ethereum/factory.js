import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1F8e084387404baFEa5e01E9051767BAb4062B39'
);

export default instance;