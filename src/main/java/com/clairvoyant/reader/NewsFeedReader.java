package com.clairvoyant.reader;

import com.rometools.rome.feed.synd.SyndEntry;
import java.util.List;

/**
 * Created by imteyaz on 09/04/18
 **/

public interface NewsFeedReader {

  List<SyndEntry> readNewsFeed(String url);
}
