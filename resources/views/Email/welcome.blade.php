@component('mail::message')
{{-- # Introduction --}}
Hi, {{$info['email']}}<br>

Thank you for creating an account with us, we do not take you for granted.


Cheers,<br>
{{ config('app.name') }}
@endcomponent
