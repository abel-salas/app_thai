/**
 * components/speaker/speaker-detail/speaker-detail.js
 *
 * Stateful component that represents a detail view for a Speaker.
 */

export const UserDetailComponent = {
  bindings: {
    user: '<'
  },
  template: `
    <article class="card">
      <section class="card-content">
        <h5>{{$ctrl.user.name}} {{$ctrl.user.lastName}}</h5>
        <h6>{{$ctrl.user.email}}</h6>
        <p>{{$ctrl.user.gender}}</p>
        <p>{{$ctrl.user.created}}</p>
      </section>
      <aside class="card-action">
        <a href="#">{{$ctrl.user.complexity}}</a>
      </aside>
    </article>
  `
}
