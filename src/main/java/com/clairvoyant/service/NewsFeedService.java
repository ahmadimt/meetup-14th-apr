package com.clairvoyant.service;

import com.clairvoyant.model.NewsFeed;
import java.util.List;

/**
 * Created by imteyaz on 09/04/18
 **/

public interface NewsFeedService {

  List<NewsFeed> save(List<NewsFeed> newsFeeds);
}
