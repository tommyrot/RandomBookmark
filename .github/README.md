<img src="../icon.svg" width="96px">

# Random Bookmark

Tiny **Firefox extension** that opens a random Bookmark in your current tab with a single click ***on the icon in the toolbar***. It has a word filter in order to black/whitelist selected URLs.

## Why?

I have thousands of bookmarks, sometimes i just want to be surprised.

## Permissions

- Read and modify bookmarks -- this extension **only reads** your bookmarks.
- Local storage -- save your filter list **nothing else**.

No access to your browsing data, no network requests, no background processes or any bullshit.

## Install

Easiest is to grab from xxx.

### Making the button visible on the toolbar

If your browser is set to "never remember history" (permanent private browsing), the extension won't appear in the toolbar by default. To fix this:

1. Go to `about:addons` and find the entry for this extension.
2. Set **Run in Private Windows** to **Allow**.

Then pin the button to your toolbar:

1. Click the **puzzle piece icon** (Extensions menu) in the toolbar.
2. Find this extension and click the **gear icon** next to it.
3. Select **Pin to Toolbar**.

## Filtering

You can exclude (or include) specific bookmarks by keyword. Open the filter settings from `about:addons` -> **Random Bookmark** -> **Preferences** (click the 3-dot button next to the enable/disable switch).

There are two modes:

- **Blacklist** (default) -- bookmarks matching any listed keywords are excluded.
- **Whitelist** -- only bookmarks matching a listed keywords are included.

Enter one keyword per line. Matching is case-insensitive and checks the full URL, so `youtu` will match `https://www.youtube.com/watch?v=abc123` etc.
