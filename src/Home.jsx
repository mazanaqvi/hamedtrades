import { Link } from "react-router-dom";
import { INVITE_URL } from "./invite.js";

export function Home() {
  return (
    <>
      <div className="wrap hero">
        <div>
          <p className="kicker">Discord bot</p>
          <h1>A direct note from the desk.</h1>
          <p className="lede">
            Hamed Trades delivers a server announcement as a direct message. An administrator writes it
            once. Each member is addressed by the name they use on the server.
          </p>
          <div className="actions">
            <a className="button" href={INVITE_URL}>
              Add to Discord
            </a>
            <Link className="text-link" to="/privacy">
              Privacy policy
            </Link>
          </div>
          <article className="msg">
            <header>
              <span className="avatar" aria-hidden="true">
                H
              </span>
              <strong>Hamed Trades</strong>
              <time>Today at 9:41 AM</time>
            </header>
            <p>
              Hi, Aaron,
              <br />
              <br />
              Monday’s session notes are in #desk. Nothing here is a recommendation to buy or sell.
            </p>
          </article>
        </div>
        <figure className="brand">
          <img
            src={`${import.meta.env.BASE_URL}hamed_trades.png`}
            width="1192"
            height="1194"
            alt="Hamed Trades logo: a green bull, the word Hamed, the Statue of Liberty, and a blue city skyline."
          />
        </figure>
      </div>

      <section className="band">
        <div className="wrap">
          <h2>How a send works</h2>
          <ol className="steps">
            <li>
              <span className="num">1</span>
              <div>
                <strong>An administrator runs it</strong>
                <p>Only a server administrator can start a send. Members cannot use the bot to message the server.</p>
              </div>
            </li>
            <li>
              <span className="num">2</span>
              <div>
                <strong>The bot chooses the audience</strong>
                <p>
                  One command reaches human members of the server. The other reaches only members who can see
                  the channel where the command was used.
                </p>
              </div>
            </li>
            <li>
              <span className="num">3</span>
              <div>
                <strong>It pauses between people</strong>
                <p>
                  Messages go out slowly. The same person is not messaged again from that list for two hours. A
                  new send cancels one that is still running.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div>
            <h2>What it is for</h2>
            <ul>
              <li>A notice the whole server should actually see</li>
              <li>A note limited to people who can view one channel</li>
              <li>The same text, optionally posted in a channel as well</li>
            </ul>
          </div>
          <div>
            <h2>What it is not</h2>
            <ul>
              <li>A broker, a signal service, or a place that holds money</li>
              <li>Advice to buy, sell, or hold anything</li>
              <li>A reader of private conversations or DMs people send back</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap note-card">
          <h2>The record we keep</h2>
          <p className="note">
            After a message is sent, the bot stores that member’s Discord user id and the time it was sent. The
            record is there so the same person is skipped for two hours. It is deleted after that. The wording of
            the announcement is not kept. Details, including how to ask for deletion, are in the{" "}
            <Link to="/privacy">privacy policy</Link>. Rules for using the bot are in the{" "}
            <Link to="/terms">terms of service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
