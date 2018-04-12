package com.clairvoyant.service;

import com.clairvoyant.model.NewsFeed;
import com.clairvoyant.model.NewsFeedDto;
import java.util.List;

/**
 * Created by imteyaz on 09/04/18
 **/

public interface NewsFeedService {

  List<NewsFeed> save(List<NewsFeed> newsFeeds);

  NewsFeed updateNewsFeed(NewsFeedDto newsFeedDto);
}
