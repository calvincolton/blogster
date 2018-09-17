Integration Testing Flow:

    ------------------------
    |    Launch Chromium    |<----|
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    |    Navigate to app    |     |
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    | Click stuff on screen |     |
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    | Use a DOM selector to |     |
    | retrieve the content  |     |
    |     of the element    |     |
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    |  Write assertions to  |     |
    |   make sure content   |-----|
    |       is correct      |
    ------------------------
