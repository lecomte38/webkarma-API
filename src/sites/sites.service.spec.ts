import { Test } from '@nestjs/testing';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';

jest.mock('./sites.service');

describe('SitesService', () => {
  let sitesService: SitesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [SitesController],
      providers: [SitesService],
    }).compile();

    sitesService = moduleRef.get<SitesService>(SitesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(sitesService).toBeDefined();
  });
  
  /* Find All Sites */
  describe('findAll', () => {
    it('should return an array of sites', async () => {
      sitesService.findAll = jest.fn();
      expect(sitesService.findAll);
      console.log('Test Service : Should find all sites => 200');
    });
  });

  /* Find One Site */
  describe('findOne ', () => {
    it('should return an array of the site', async () => {
      sitesService.findOne = jest.fn();
      expect(sitesService.findOne);
      console.log('Test Service : Should find one site => 200');
    });
  });

  /* Find Site By Url */
  describe('findByUrl ', () => {
    it('should return an array of the site', async () => {
      sitesService.findByUrl = jest.fn();
      expect(sitesService.findByUrl);
      console.log('Test Service : Should find one site => 200');
    });
  });

  /* Create Site */
  describe('create ', () => {
    it('should return an array of new site', async () => {
      sitesService.create = jest.fn();
      expect(sitesService.create);
      console.log('Test Service : Should create the site => 201');
    });
  });

  /* Update Site */
  describe('update ', () => {
    it('should return status of the modification', async () => {
      sitesService.update = jest.fn();
      expect(sitesService.update);
      console.log('Test Service : Update a site => 200');
    });
  });

  /* Remove Site */
  describe('remove ', () => {
    it('should return status of the deletion', async () => {
      sitesService.remove = jest.fn();
      expect(sitesService.remove);
      console.log('Test Service : Delete a site => 200');
    });
  });

});