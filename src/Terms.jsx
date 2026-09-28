import { Link } from "react-router-dom";
import { ConsentNotice } from "./ConsentNotice.jsx";

export function Terms() {
  return (
    <article className="wrap prose">
      <ConsentNotice />
      <p className="kicker">Legal</p>
      <h1>Terms of Service</h1>
      <p className="updated">Last updated 28 September 2026</p>
      <p>
        These terms cover the Hamed Trades Discord bot and this website. By inviting the bot, running its
        commands, or continuing to use a server where it is installed, you agree to these terms. If you do not
        agree, remove the bot and stop using it.
      </p>
      <p>
        The <Link to="/privacy">privacy policy</Link> explains what data the bot processes. Discord’s own{" "}
        <a href="https://discord.com/terms">Terms of Service</a> and{" "}
        <a href="https://discord.com/privacy">Privacy Policy</a> also apply to your use of Discord.
      </p>

      <h2>The service</h2>
      <p>
        Hamed Trades is a messaging bot. A server administrator can ask it to send one announcement as a direct
        message to human members of that server, or only to members who can view the channel where the command
        was used. The same text can also be posted in a channel. The bot opens each direct message with the
        member’s server display name.
      </p>
      <p>
        The bot waits between messages, skips someone who was already messaged from the same list within the last
        two hours, and stops if Discord limits or quarantines the bot. A new send cancels a send that is still in
        progress.
      </p>

      <h2>Messages and trading</h2>
      <p>
        <strong>
          Hamed Trades does not execute trades, hold funds, connect to a brokerage, or manage an account.
        </strong>{" "}
        Text sent through the bot is written by a server administrator. It is not a recommendation from the bot,
        and it is not personalized investment, financial, legal, or tax advice.
      </p>
      <p>
        Trading and investing can lose money. You are responsible for your own decisions. Do not treat a Discord
        message as an instruction to buy, sell, or hold anything.
      </p>

      <h2>Who may run commands</h2>
      <p>
        Commands that send messages require the Discord Administrator permission in that server. If you run a
        command, you represent that you are allowed to message those members and that the content is lawful.
        Server owners are responsible for administrators they appoint.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You will use the bot in line with Discord’s terms, community guidelines, and developer policies. You will
        not use it to:
      </p>
      <ul>
        <li>Harass, threaten, or deceive anyone</li>
        <li>Send scams, phishing, malware, or unsolicited advertising</li>
        <li>Impersonate another person or hide who a message is from</li>
        <li>Break the law, or ask others to break the law</li>
        <li>Work around Discord’s rate limits, anti-spam systems, or a quarantine</li>
      </ul>
      <p>We may stop the bot in a server that uses it this way.</p>

      <h2>Availability</h2>
      <p>
        The bot is provided as available. Discord can throttle, quarantine, or block delivery. Direct messages
        fail when a member has closed them, left the server, or does not share a server with the bot. A message
        may arrive late, arrive incomplete, or not arrive. We do not promise a delivery time or a delivery rate.
      </p>

      <h2>No warranty</h2>
      <p>
        The bot and this website are provided “as is.” To the fullest extent the law allows, we disclaim
        warranties of merchantability, fitness for a particular purpose, and non-infringement, and any warranty
        that the service will be uninterrupted or error-free.
      </p>

      <h2>Liability</h2>
      <p>
        To the fullest extent the law allows, Hamed Trades and the people who operate it are not liable for lost
        profits, trading losses, lost data, or indirect or consequential damages arising from the bot, a message
        it delivered, or a message it did not deliver. Where a limit is not allowed, liability is limited to the
        smallest amount the law does allow.
      </p>
      <p>
        Nothing in these terms limits liability that cannot legally be limited, including liability for fraud or
        for death or personal injury caused by negligence where such a limit is prohibited.
      </p>

      <h2>Stopping the service</h2>
      <p>
        We may change, pause, or shut down the bot, and we may remove it from a server, at any time. You may
        remove the bot from your server at any time in Discord’s server settings.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms by posting a new version on this page and changing the date above. Continuing
        to use the bot after the new date means you accept the update. If a change is one you cannot accept,
        remove the bot.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: contact the owner of the Hamed Trades application on Discord. This bot is
        not operated by Discord Inc.
      </p>
    </article>
  );
}
