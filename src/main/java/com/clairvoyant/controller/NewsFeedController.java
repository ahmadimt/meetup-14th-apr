package com.clairvoyant.controller;

import com.clairvoyant.model.NewsFeed;
import com.clairvoyant.model.NewsFeedDto;
import com.clairvoyant.reader.NewsFeedReader;
import com.clairvoyant.service.NewsFeedService;
import com.rometools.rome.feed.synd.SyndEntry;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by imteyaz on 09/04/18
 **/

@RestController
public class NewsFeedController {

  private final NewsFeedService newsFeedService;
  private final NewsFeedReader newsFeedReader;

  @Autowired
  public NewsFeedController(NewsFeedService newsFeedService,
      NewsFeedReader newsFeedReader) {
    this.newsFeedService = newsFeedService;
    this.newsFeedReader = newsFeedReader;
  }

  @PostMapping(value = "/rss",
      produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
  public List<NewsFeed> saveRssFeed(@RequestBody String url) {
    List<SyndEntry> syndEntries = newsFeedReader.readNewsFeed(url);
    return newsFeedService.save(NewsFeed.from(syndEntries));
  }

  @PutMapping(value = "/newsfeed/",produces = MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
  public NewsFeed updateNewsFeed(@RequestBody NewsFeedDto newsFeed){
    return newsFeedService.updateNewsFeed(newsFeed);
  }
}
