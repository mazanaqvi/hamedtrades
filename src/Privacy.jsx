import { Link } from "react-router-dom";
import { ConsentNotice } from "./ConsentNotice.jsx";

export function Privacy() {
  return (
    <article className="wrap prose">
      <ConsentNotice />
      <p className="kicker">Legal</p>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated 28 September 2026</p>
      <p>
        This policy describes how the Hamed Trades Discord bot (“the bot,” “we”) handles information when it is
        used. It is written so you can see what we receive, why, who else sees it, and how to ask us to delete
        it.
      </p>
      <p>
        Discord also processes your information when you use Discord. Their{" "}
        <a href="https://discord.com/privacy">Privacy Policy</a> covers that. This page covers the bot only.
      </p>

      <h2>Who we are</h2>
      <p>
        The bot is operated by Hamed Trades, the owner of the Discord application that runs it. We are not
        Discord. Contact details are at the end of this page.
      </p>

      <h2>What the bot does</h2>
      <p>
        A server administrator can send one announcement as a direct message to human members, or only to members
        who can view a channel. The message starts with “Hi,” and that member’s server display name. The
        administrator may also post the same text in a channel.
      </p>

      <h2>Data we process</h2>
      <p>
        When an administrator runs a command, Discord gives the bot the information it needs to carry the command
        out. We use:
      </p>
      <dl className="facts">
        <dt>Discord user id</dt>
        <dd>Identifies the member, so we know who has already been messaged.</dd>
        <dt>Username and server display name</dt>
        <dd>The display name is placed in the greeting at the moment of sending. It is not written into the cooldown file.</dd>
        <dt>Server and channel</dt>
        <dd>
          The server id, and whether a member can view the channel, so the bot can limit a send to the right
          people. Bots and apps are skipped.
        </dd>
        <dt>The announcement text</dt>
        <dd>The words the administrator typed. They are sent through Discord and are not saved in the cooldown file.</dd>
        <dt>Who ran the command</dt>
        <dd>
          Discord includes the administrator’s user id on the interaction. We use it to check that they have
          Administrator permission. We do not build a profile of who runs commands.
        </dd>
      </dl>

      <h2>Data we store</h2>
      <p>
        The only record the bot keeps on purpose is a cooldown list: a Discord user id and the time a message was
        sent. An administrator can clear that list early. Otherwise each entry is deleted after two hours, and
        the file is rewritten without the expired entries.
      </p>
      <p>
        The machine that runs the bot may also keep short operational logs (for example an error that includes a
        user id) so we can see why a send stopped. Those logs are for operating and securing the bot. They are
        not used for advertising.
      </p>

      <h2>Why we process it</h2>
      <p>We process this information to:</p>
      <ul>
        <li>Deliver the announcement an administrator of your server asked the bot to send</li>
        <li>Avoid messaging the same person again from that list for two hours</li>
        <li>Skip other bots, and stop a send if Discord’s anti-spam systems intervene</li>
        <li>Keep the bot running and fix failures</li>
      </ul>
      <p>
        You receive a message because you are a member of a Discord server that installed the bot, and an
        administrator of that server chose to send it. You can stop further messages by leaving the server or by
        closing direct messages from server members in your Discord privacy settings.
      </p>

      <h2>What we do not collect</h2>
      <p>
        We do not ask for, and the bot is not built to collect, your email address, phone number, password,
        payment card, government id, or brokerage or exchange account. We do not read your direct-message
        replies. We do not sell personal information, and we do not share it for advertising or with data
        brokers.
      </p>
      <p>The bot does not track you across other websites. This website does not set analytics cookies and does not run advertising.</p>

      <h2>Who else receives data</h2>
      <ul>
        <li>
          <strong>Discord.</strong> Message text and recipient ids are sent to Discord so Discord can deliver the
          direct message or channel post. Discord’s privacy policy applies to Discord’s own processing.
        </li>
        <li>
          <strong>The host.</strong> The bot runs on a rented server. As of the date above, that host is
          PebbleHost. The host stores the cooldown file and logs on the machine as part of providing the server.
          They do not receive the data so they can market to you.
        </li>
      </ul>
      <p>
        We may also disclose information if the law requires it, or to respond to a valid legal request. We do
        not otherwise share the cooldown list.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Cooldown entries are kept for two hours, then deleted. If an administrator resets the list, they are
        deleted then. Operational logs are kept only as long as needed to run and protect the bot, and they are
        not kept as a member directory.
      </p>

      <h2>Deletion, access, and your choices</h2>
      <p>
        You can ask us for a copy of the cooldown record we hold about your Discord user id, or ask us to delete
        it. Because that record expires after two hours, we may already have deleted it by the time you ask.
        Contact the application owner using the details below and include the Discord account the request is
        about. We will respond and, where we still have the record, delete it.
      </p>
      <p>You can also:</p>
      <ul>
        <li>Leave the server, which stops future sends from the bot in that server</li>
        <li>Turn off direct messages from server members in Discord’s privacy settings</li>
        <li>Ask a server administrator not to include you in a send</li>
      </ul>
      <p>
        If a privacy law where you live gives you rights to access, correct, delete, or object to processing, or
        to complain to a regulator, you can use this contact path to exercise the rights that apply to the
        limited data we hold. We will not charge you for a request unless the law allows a reasonable fee for a
        request that is manifestly unfounded or excessive. We do not sell personal information, and we do not
        offer a financial incentive in exchange for it.
      </p>

      <h2>Children</h2>
      <p>
        The bot is not directed at anyone under 13, or under 16 where that is the local digital-consent age. We
        do not knowingly store a child’s user id. Discord’s own age rules also apply. If you believe we have data
        about a child, contact us and we will delete it.
      </p>

      <h2>Where the data sits</h2>
      <p>
        Discord processes data in the places described in Discord’s privacy policy. The cooldown file sits on the
        server that hosts the bot, which may be outside your country. We keep that file so the two-hour pause
        works.
      </p>

      <h2>Security</h2>
      <p>
        Access to the host and the cooldown file is limited to the operator. No method of storage is perfect. The
        file is a list of Discord ids and times, not a store of passwords or payment data.
      </p>

      <h2>Changes</h2>
      <p>
        If we change what we collect or how long we keep it, we will update this page and the date at the top.
        The current version is the one published here.
      </p>

      <h2>Contact</h2>
      <p>
        To ask what we hold, or to ask for deletion, contact the owner of the Hamed Trades Discord application.
        Use the application’s profile in the Discord Developer listing, or a message to the owner inside the
        Hamed Trades server.
      </p>
      <p>
        Please include the Discord username the request is about. We use that only to find and delete the matching
        cooldown entry. The <Link to="/terms">terms of service</Link> cover how the bot may be used.
      </p>
    </article>
  );
}
